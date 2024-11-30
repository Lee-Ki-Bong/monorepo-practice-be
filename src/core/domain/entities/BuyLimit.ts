import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("status", ["adminuser", "status"], {})
@Index("subject", ["adminuser", "subject"], {})
@Entity("buy_limit", { schema: "makeshop" })
export class BuyLimit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("enum", {
    name: "status",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  status: "" | "N" | "Y";

  @Column("int", { name: "pay_limit", default: () => "'0'" })
  payLimit: number;

  @Column("int", { name: "buy_limit", default: () => "'0'" })
  buyLimit: number;

  @Column("int", { name: "limit_time", default: () => "'0'" })
  limitTime: number;

  @Column("varchar", { name: "limit_domain", nullable: true, length: 255 })
  limitDomain: string | null;

  @Column("int", { name: "img_preview", default: () => "'0'" })
  imgPreview: number;

  @Column("varchar", { name: "main_img", length: 255 })
  mainImg: string;

  @Column("varchar", { name: "main_img_name", length: 255 })
  mainImgName: string;

  @Column("varchar", { name: "main_img_url", length: 255 })
  mainImgUrl: string;

  @Column("varchar", { name: "main_m_img", length: 255 })
  mainMImg: string;

  @Column("varchar", { name: "main_m_img_name", length: 255 })
  mainMImgName: string;

  @Column("varchar", { name: "main_m_img_url", length: 255 })
  mainMImgUrl: string;

  @Column("varchar", { name: "end_img", length: 255 })
  endImg: string;

  @Column("varchar", { name: "end_img_name", length: 255 })
  endImgName: string;

  @Column("varchar", { name: "end_img_url", length: 255 })
  endImgUrl: string;

  @Column("varchar", { name: "end_m_img", length: 255 })
  endMImg: string;

  @Column("varchar", { name: "end_m_img_name", length: 255 })
  endMImgName: string;

  @Column("varchar", { name: "end_m_img_url", length: 255 })
  endMImgUrl: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("enum", {
    name: "confirm_status",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  confirmStatus: "" | "N" | "Y";

  @Column("enum", {
    name: "email_status",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  emailStatus: "" | "N" | "Y";
}
