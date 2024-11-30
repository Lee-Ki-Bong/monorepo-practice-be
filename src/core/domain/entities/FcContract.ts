import { Column, Entity } from "typeorm";

@Entity("fc_contract", { schema: "makeshop" })
export class FcContract {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("longtext", { name: "privercy" })
  privercy: string;

  @Column("longtext", { name: "privercy1" })
  privercy1: string;

  @Column("longtext", { name: "privercy2" })
  privercy2: string;

  @Column("longtext", { name: "privercy3" })
  privercy3: string;

  @Column("longtext", { name: "join_main" })
  joinMain: string;

  @Column("varchar", { name: "join_bgimg", length: 25 })
  joinBgimg: string;

  @Column("longtext", { name: "join_end" })
  joinEnd: string;
}
