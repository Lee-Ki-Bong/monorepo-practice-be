import { Column, Entity, Index } from "typeorm";

@Index("iddate", ["adminuser", "date"], {})
@Entity("personal", { schema: "makeshop" })
export class Personal {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "hname", nullable: true, length: 10 })
  hname: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 16 })
  ip: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 250 })
  subject: string | null;

  @Column("enum", {
    name: "write_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  writePath: "" | "WEB" | "MOBILE";

  @Column("varchar", { name: "attach1", nullable: true, length: 50 })
  attach1: string | null;

  @Column("varchar", { name: "counsel_id", nullable: true, length: 12 })
  counselId: string | null;

  @Column("varchar", { name: "reply_sub", nullable: true, length: 250 })
  replySub: string | null;

  @Column("varchar", { name: "reply_date", nullable: true, length: 14 })
  replyDate: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("mediumtext", { name: "reply", nullable: true })
  reply: string | null;

  @Column("varchar", { name: "recommend_brand_uid", length: 100 })
  recommendBrandUid: string;

  @Column("varchar", { name: "ordernum", nullable: true, length: 50 })
  ordernum: string | null;

  @Column("mediumtext", { name: "order_brand_name", nullable: true })
  orderBrandName: string | null;

  @Column("char", { name: "agree_selective", length: 2, default: () => "'--'" })
  agreeSelective: string;

  @Column("varchar", { name: "write_date", nullable: true, length: 14 })
  writeDate: string | null;
}
