import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type BrandMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Brand {
  readonly id: string;
  readonly key?: string | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Brand, BrandMetaData>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand, BrandMetaData>) => MutableModel<Brand, BrandMetaData> | void): Brand;
}