import { Column, Entity } from "typeorm";

@Entity("power_review_likeit", { schema: "makeshop" })
export class PowerReviewLikeit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 20 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", {
    name: "uid",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  uid: number | null;

  @Column("enum", {
    name: "prl_action",
    enum: ["", "GOOD", "BAD"],
    default: () => "'GOOD'",
  })
  prlAction: "" | "GOOD" | "BAD";

  @Column("varchar", { name: "prl_page", length: 10 })
  prlPage: string;

  @Column("varchar", { name: "prl_path", length: 10 })
  prlPath: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
