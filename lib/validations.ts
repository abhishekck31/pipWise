import { z } from 'zod';

// ─────────────────────────────────────────────────────────────────────────────
// Trade Schemas
// ─────────────────────────────────────────────────────────────────────────────

export const tradeDirectionSchema = z.enum(['LONG', 'SHORT']);
export const tradeStatusSchema = z.enum(['OPEN', 'CLOSED']);
export const assetClassSchema = z.enum(['EQUITY', 'FOREX', 'CRYPTO', 'FUTURES', 'OPTIONS', 'CFD']);

export const createTradeSchema = z.object({
  symbol: z.string().min(1).max(20).toUpperCase(),
  assetClass: assetClassSchema.default('EQUITY'),
  direction: tradeDirectionSchema,
  entryPrice: z.number().positive(),
  quantity: z.number().positive(),
  entryDate: z.coerce.date(),
  stopLoss: z.number().positive().optional(),
  takeProfit: z.number().positive().optional(),
  fees: z.number().min(0).optional(),
  notes: z.string().max(5000).optional(),
  tags: z.array(z.string()).default([]),
});

export const updateTradeSchema = createTradeSchema.partial().extend({
  status: tradeStatusSchema.optional(),
  exitPrice: z.number().positive().optional(),
  exitDate: z.coerce.date().optional(),
});

export type CreateTradeInput = z.infer<typeof createTradeSchema>;
export type UpdateTradeInput = z.infer<typeof updateTradeSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// Journal Entry Schemas
// ─────────────────────────────────────────────────────────────────────────────

export const createJournalEntrySchema = z.object({
  title: z.string().max(200).optional(),
  content: z.string().min(1).max(50000),
  tradeId: z.string().cuid().optional(),
  mood: z.number().int().min(1).max(5).optional(),
  tags: z.array(z.string()).default([]),
});

export const updateJournalEntrySchema = createJournalEntrySchema.partial();

export type CreateJournalEntryInput = z.infer<typeof createJournalEntrySchema>;
export type UpdateJournalEntryInput = z.infer<typeof updateJournalEntrySchema>;
