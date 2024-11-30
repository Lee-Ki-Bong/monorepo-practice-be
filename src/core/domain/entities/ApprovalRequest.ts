import { Column, Entity, Index } from "typeorm";

@Index("status", ["adminuser", "okSubId", "status"], {})
@Entity("approval_request", { schema: "makeshop" })
export class ApprovalRequest {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "app_id",
    unsigned: true,
    default: () => "'0'",
  })
  appId: number;

  @Column("varchar", { primary: true, name: "ok_sub_id", length: 12 })
  okSubId: string;

  @Column("char", {
    primary: true,
    name: "num",
    length: 1,
    default: () => "'1'",
  })
  num: string;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["", "NONE", "BACK", "OK"],
    default: () => "'NONE'",
  })
  status: "" | "NONE" | "BACK" | "OK" | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "ok_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  okDate: Date;
}
