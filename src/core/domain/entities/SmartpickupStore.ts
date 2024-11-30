import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_store_uid", ["storeUid"], {})
@Index("idx_store_code", ["adminuser", "storeCode"], { unique: true })
@Index("idx_store_name", ["adminuser", "storeName"], {})
@Entity("smartpickup_store", { schema: "makeshop" })
export class SmartpickupStore {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "store_uid", unsigned: true })
  storeUid: number;

  @Column("varchar", { name: "store_code", length: 50 })
  storeCode: string;

  @Column("enum", {
    name: "store_type",
    enum: ["", "NORMAL", "SPECIAL"],
    default: () => "'NORMAL'",
  })
  storeType: "" | "NORMAL" | "SPECIAL";

  @Column("varchar", { name: "store_pw", length: 128 })
  storePw: string;

  @Column("varchar", { name: "store_name", length: 255 })
  storeName: string;

  @Column("varchar", { name: "store_tel", length: 14, default: () => "'--'" })
  storeTel: string;

  @Column("varchar", { name: "store_hp", length: 14, default: () => "'--'" })
  storeHp: string;

  @Column("varchar", {
    name: "store_hp2",
    nullable: true,
    length: 13,
    default: () => "'--'",
  })
  storeHp2: string | null;

  @Column("varchar", {
    name: "store_hp3",
    nullable: true,
    length: 13,
    default: () => "'--'",
  })
  storeHp3: string | null;

  @Column("mediumtext", { name: "store_open", nullable: true })
  storeOpen: string | null;

  @Column("varchar", { name: "store_post", length: 7 })
  storePost: string;

  @Column("varchar", { name: "store_addr1", length: 255 })
  storeAddr1: string;

  @Column("varchar", { name: "store_addr2", length: 255 })
  storeAddr2: string;

  @Column("varchar", { name: "store_addr3", length: 255 })
  storeAddr3: string;

  @Column("enum", {
    name: "store_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  storeDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "store_holiday",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  storeHoliday: "" | "Y" | "N";

  @Column("enum", {
    name: "store_close",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  storeClose: "" | "Y" | "N";

  @Column("mediumtext", { name: "store_close_data", nullable: true })
  storeCloseData: string | null;

  @Column("enum", {
    name: "store_temp_close",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  storeTempClose: "" | "Y" | "N";

  @Column("mediumtext", { name: "store_temp_close_data", nullable: true })
  storeTempCloseData: string | null;

  @Column("varchar", { name: "store_extra_close", nullable: true, length: 255 })
  storeExtraClose: string | null;

  @Column("varchar", { name: "store_url", length: 255 })
  storeUrl: string;

  @Column("enum", {
    name: "store_range",
    enum: ["", "S", "O", "B"],
    default: () => "'S'",
  })
  storeRange: "" | "S" | "O" | "B";

  @Column("enum", {
    name: "store_url_target",
    enum: ["NEW", "SELF"],
    default: () => "'NEW'",
  })
  storeUrlTarget: "NEW" | "SELF";

  @Column("varchar", { name: "store_img", length: 255 })
  storeImg: string;
}
