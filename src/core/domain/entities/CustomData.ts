import { Column, Entity } from "typeorm";

@Entity("custom_data", { schema: "makeshop" })
export class CustomData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "c_type", length: 20 })
  cType: string;

  @Column("varchar", { primary: true, name: "c_key1", length: 20 })
  cKey1: string;

  @Column("varchar", { primary: true, name: "c_key2", length: 20 })
  cKey2: string;

  @Column("varchar", { name: "c_value", length: 255 })
  cValue: string;

  @Column("datetime", {
    name: "c_reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  cRegDate: Date | null;
}
