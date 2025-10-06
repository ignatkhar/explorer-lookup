import { type ExplorerAPI } from '../../models/explorers';
import { ethereumRPCParsingFunction } from './ethereum.js';

// Arbitrum Sepolia public RPC endpoint
export const arbitrumSepoliaRPC: ExplorerAPI = {
  serviceURL: 'https://sepolia-rollup.arbitrum.io/rpc',
  apiType: 'rpc',
  chainType: 'eth',
  parsingFunction: ethereumRPCParsingFunction,
  priority: -1
};

// Arbitrum One public RPC endpoint (for future use)
export const arbitrumOneRPC: ExplorerAPI = {
  serviceURL: 'https://arb1.arbitrum.io/rpc',
  apiType: 'rpc',
  chainType: 'eth',
  parsingFunction: ethereumRPCParsingFunction,
  priority: -1
};
