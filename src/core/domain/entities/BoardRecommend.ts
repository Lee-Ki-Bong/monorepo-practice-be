import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_bid", ["bid"], {})
@Index("recom_check", ["code", "num1", "num2", "id", "ip"], {})
@Index("user", ["adminuser", "id"], {})
@Entity("board_recommend", { schema: "makeshop" })
export class BoardRecommend {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "bid", unsigned: true })
  bid: number;

  @Column("varchar", { name: "code", length: 24 })
  code: string;

  @Column("varchar", { name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { name: "num2", length: 5 })
  num2: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("int", { name: "reserve", unsigned: true, default: () => "'0'" })
  reserve: number;

  @Column("enum", {
    name: "reserve_status",
    enum: ["", "NONE", "REQUEST", "REJECT", "PAY"],
    default: () => "'NONE'",
  })
  reserveStatus: "" | "NONE" | "REQUEST" | "REJECT" | "PAY";

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
