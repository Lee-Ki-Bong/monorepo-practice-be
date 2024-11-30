import { Column, Entity, Index } from "typeorm";

@Index("opt_id", ["adminuser", "optId"], {})
@Entity("user_add_option", { schema: "makeshop" })
export class UserAddOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", {
    primary: true,
    name: "custom_type",
    length: 10,
    default: () => "'BASIC'",
  })
  customType: string;

  @Column("int", { name: "opt_id", unsigned: true, default: () => "'0'" })
  optId: number;

  @Column("int", { name: "opt_id2", unsigned: true, default: () => "'0'" })
  optId2: number;

  @Column("mediumtext", { name: "opt_text", nullable: true })
  optText: string | null;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
