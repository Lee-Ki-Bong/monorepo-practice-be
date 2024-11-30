import { Column, Entity, Index } from "typeorm";

@Index("one", ["adminuser", "oneclickIdx"], { unique: true })
@Entity("oneclick_userinfo", { schema: "makeshop" })
export class OneclickUserinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "oneclick_idx", default: () => "'1'" })
  oneclickIdx: number;

  @Column("int", { name: "category", default: () => "'1'" })
  category: number;

  @Column("mediumtext", { name: "info", nullable: true })
  info: string | null;

  @Column("enum", {
    name: "use_type",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useType: "" | "Y" | "N";

  @Column("varchar", { name: "reg_date", length: 14 })
  regDate: string;
}
