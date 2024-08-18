import { BaseSelectMenuComponentData, ChannelSelectMenuComponentData } from "discord.js";
import { defaultify } from "stuffs";
import { NamespaceEnums } from "../../../generated/namespaceData";
import { DBIChannelSelectMenu } from "../Components/ChannelSelectMenu";
import { RecursivePartial } from "../../utils/UtilTypes";

export type DBIChannelSelectMenuOverrides = RecursivePartial<Omit<ChannelSelectMenuComponentData, "customId" | "type">>

export class DBIChannelSelectMenuBuilder<TNamespace extends NamespaceEnums> {
  component: DBIChannelSelectMenu<TNamespace>
  overrides: DBIChannelSelectMenuOverrides;
  reference: { data: (string | number | object | boolean | null | undefined)[], ttl?: number };
  constructor(arg: { component: DBIChannelSelectMenu<TNamespace>, overrides?: DBIChannelSelectMenuOverrides, reference?: { data: (string | number | object | boolean | null | undefined)[], ttl?: number } }) {
    this.component = arg.component;
    this.overrides = arg.overrides ?? {};
    this.reference = arg.reference ?? { data: [] };
  }

  setTTL(ttl: number): DBIChannelSelectMenuBuilder<TNamespace> {
    this.reference.ttl = ttl;
    return this;
  }

  addTTL(ttl: number): DBIChannelSelectMenuBuilder<TNamespace> {
    this.reference.ttl = (this.reference.ttl ?? 0) + ttl;
    return this;
  }

  setData(...data: (string | number | object | boolean | null | undefined)[]): DBIChannelSelectMenuBuilder<TNamespace> {
    this.reference.data = data;
    return this;
  }

  addData(...data: (string | number | object | boolean | null | undefined)[]): DBIChannelSelectMenuBuilder<TNamespace> {
    this.reference.data = [...this.reference.data, ...data];
    return this;
  }

  setOverrides(overrides: DBIChannelSelectMenuOverrides): DBIChannelSelectMenuBuilder<TNamespace> {
    this.overrides = overrides;
    return this;
  }

  addOverrides(overrides: DBIChannelSelectMenuOverrides): DBIChannelSelectMenuBuilder<TNamespace> {
    this.overrides = defaultify(overrides, this.overrides, true);
    return this;
  }

  toJSON(): BaseSelectMenuComponentData {
    return this.component.toJSON({ overrides: this.overrides as any, reference: this.reference });
  }

}