import { Column, Entity } from "typeorm";

@Entity("comment_recommend_log", { schema: "makeshop" })
export class CommentRecommendLog {
  @Column("char", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("char", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("char", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("int", {
    primary: true,
    name: "cid",
    unsigned: true,
    default: () => "'0'",
  })
  cid: number;

  @Column("char", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "cl_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  clRegisterDate: Date;
}
