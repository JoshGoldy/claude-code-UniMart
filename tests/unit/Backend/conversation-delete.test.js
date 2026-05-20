import { jest } from '@jest/globals';
import { deleteConversationForUser, initializeSupabase } from '../../../frontend/scripts/auth.js';

function mkAuth() {
  return {
    signUp: jest.fn(),
    signInWithPassword: jest.fn(),
    signInWithOAuth: jest.fn(),
    signOut: jest.fn(),
    getSession: jest.fn().mockResolvedValue({ data: { session: null } }),
    updateUser: jest.fn(),
    verifyOtp: jest.fn(),
    resetPasswordForEmail: jest.fn(),
    resend: jest.fn(),
  };
}

function mkChain() {
  return {
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    upsert: jest.fn().mockResolvedValue({ error: null }),
    eq: jest.fn().mockReturnThis(),
    in: jest.fn().mockResolvedValue({ error: null }),
    maybeSingle: jest.fn().mockResolvedValue({ data: null, error: null }),
    single: jest.fn().mockResolvedValue({ data: null, error: null }),
  };
}

function mkSb(fromFn) {
  return {
    createClient: jest.fn().mockReturnValue({
      auth: mkAuth(),
      from: fromFn || jest.fn().mockReturnValue(mkChain()),
      storage: {
        from: jest.fn().mockReturnValue({
          upload: jest.fn().mockResolvedValue({ error: null }),
          getPublicUrl: jest.fn().mockReturnValue({ data: { publicUrl: '' } }),
        }),
      },
    }),
  };
}

describe('deleteConversationForUser', () => {
  test('clears open offers and messages before hiding the thread', async () => {
    const conversation = {
      conversation_id: 'c1',
      listing_id: 'l1',
      buyer_id: 'buyer1',
      seller_id: 'seller1',
    };
    const chains = {
      conversations: {
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        maybeSingle: jest.fn().mockResolvedValue({ data: conversation, error: null }),
      },
      offers: {
        delete: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        in: jest.fn().mockResolvedValue({ error: null }),
      },
      messages: {
        delete: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
      },
      conversation_deletions: {
        upsert: jest.fn().mockResolvedValue({ error: null }),
      },
    };
    initializeSupabase(mkSb(table => chains[table] || mkChain()));

    const result = await deleteConversationForUser({ conversationId: 'c1', userId: 'buyer1' });

    expect(result.success).toBe(true);
    expect(chains.offers.delete).toHaveBeenCalled();
    expect(chains.offers.in).toHaveBeenCalledWith('status', ['pending', 'declined', 'rejected']);
    expect(chains.messages.delete).toHaveBeenCalled();
    expect(chains.messages.eq).toHaveBeenCalledWith('conversation_id', 'c1');
    expect(chains.conversation_deletions.upsert).toHaveBeenCalled();
  });
});
