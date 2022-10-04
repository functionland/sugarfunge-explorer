// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {

  alias: {
    ormlTokens: {
      AccountData: 'OrmlAccountData'
    }
  },

  types: [
    {
      // on all versions
      minmax: [0, undefined],

      types: {
        Balance: 'u128',
        Address: 'MultiAddress',
        LookupSource: 'MultiAddress',
        OrmlAccountData: 'Balance',
        TokenId: 'u64',
        InstanceId: 'u64',
        Token: {
          instance_id: "InstanceId",
          creator: "AccountId",
          is_nf: "bool",
          uri: "Vec<u8>"
        },
        TokenInfo: {
          instance_id: 'InstanceId',
          token_id: 'TokenId',
          total_supply: 'Balance',
        },
        Instance: {
          owner: "AccountId",
          data: "Vec<u8>"
        },
        ExchangeId: 'u32',
        TokenSymbol: {
          _enum: {
            SUGAR: 0,
            DOT: 1,
            ETH: 2,
            BTC: 3
          }
        },
        CurrencyId: {
          _enum: {
            Token: 'TokenSymbol',
            Id: 'TokenId'
          }
        },
        CurrencyIdOf: 'CurrencyId',
        CollectionId: 'u64',
        CollectionInfo: {
          owner: 'AccountId',
          totalSupply: 'u128',
          deposit: 'Balance',
          properties: 'Vec<u8>'
        },
        AssetId: 'u64',
        Amount: 'i128',
        AmountOf: 'Amount'
      }
    }
  ]
};

export default definitions;