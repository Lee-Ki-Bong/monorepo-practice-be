import { Column, Entity } from "typeorm";

@Entity("share_board", { schema: "makeshop" })
export class ShareBoard {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", {
    primary: true,
    name: "num2",
    length: 5,
    default: () => "'00000'",
  })
  num2: string;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;
}
