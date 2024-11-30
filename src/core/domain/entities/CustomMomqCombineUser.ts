import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_after_id", ["adminuser", "afterId"], {})
@Index("adminuser_before_id", ["adminuser", "beforeId"], {})
@Index("doing_date", ["adminuser", "doingDate"], {})
@Index("done_date", ["adminuser", "doneDate"], {})
@Index("idx_auto_combine_uid", ["combineUid"], {})
@Index("mod_date", ["adminuser", "modDate"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("state", ["adminuser", "combineState"], {})
@Entity("custom_momq_combine_user", { schema: "makeshop" })
export class CustomMomqCombineUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "combine_uid", unsigned: true })
  combineUid: number;

  @Column("varchar", { name: "before_id", length: 20 })
  beforeId: string;

  @Column("varchar", { name: "after_id", length: 20 })
  afterId: string;

  @Column("bigint", { name: "sso_merges_id", nullable: true, unsigned: true })
  ssoMergesId: string | null;

  @Column("enum", {
    name: "combine_state",
    enum: ["", "wait", "doing", "done", "fail"],
    default: () => "'wait'",
  })
  combineState: "" | "wait" | "doing" | "done" | "fail";

  @Column("enum", {
    name: "is_combine",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  isCombine: "" | "Y" | "N";

  @Column("mediumtext", { name: "combine_text", nullable: true })
  combineText: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "doing_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  doingDate: Date;

  @Column("datetime", {
    name: "done_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  doneDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
