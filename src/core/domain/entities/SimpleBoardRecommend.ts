import { Column, Entity } from "typeorm";

@Entity("simple_board_recommend", { schema: "makeshop" })
export class SimpleBoardRecommend {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "b_type", length: 20 })
  bType: string;

  @Column("int", {
    primary: true,
    name: "matching_id",
    unsigned: true,
    default: () => "'0'",
  })
  matchingId: number;

  @Column("int", {
    primary: true,
    name: "bid",
    unsigned: true,
    default: () => "'0'",
  })
  bid: number;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
