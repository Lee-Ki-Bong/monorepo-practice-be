import { Column, Entity } from "typeorm";

@Entity("board_recommend_log", { schema: "makeshop" })
export class BoardRecommendLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("datetime", {
    primary: true,
    name: "pay_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payDate: Date;

  @Column("enum", {
    name: "pay_type",
    enum: ["", "NOW", "REQUEST"],
    default: () => "'NOW'",
  })
  payType: "" | "NOW" | "REQUEST";

  @Column("varchar", { name: "admin_id", length: 12 })
  adminId: string;

  @Column("int", { name: "reserve", unsigned: true, default: () => "'0'" })
  reserve: number;
}
