import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("id", ["adminuser", "id"], {})
@Entity("counsel", { schema: "makeshop" })
export class Counsel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("mediumtext", { name: "contents", nullable: true })
  contents: string | null;

  @Column("char", { name: "complain_group", length: 3, default: () => "'D00'" })
  complainGroup: string;

  @Column("char", {
    name: "complain",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  complain: string | null;

  @Column("enum", {
    name: "display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "status",
    enum: ["", "N", "I", "Y"],
    default: () => "'N'",
  })
  status: "" | "N" | "I" | "Y";

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("datetime", {
    primary: true,
    name: "date",
    default: () => "'0000-00-00 00:00:00'",
  })
  date: Date;
}
