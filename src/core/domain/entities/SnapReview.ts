import { Column, Entity, Index } from "typeorm";

@Index("user_id", ["adminuser", "userId"], {})
@Entity("snap_review", { schema: "makeshop" })
export class SnapReview {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "review_num",
    unsigned: true,
    default: () => "'0'",
  })
  reviewNum: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "user_grade", length: 10 })
  userGrade: string;

  @Column("varchar", { name: "user_name", length: 30 })
  userName: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "brandname", length: 255 })
  brandname: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "view_status", length: 6 })
  viewStatus: string;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("int", { name: "point", unsigned: true, default: () => "'0'" })
  point: number;

  @Column("datetime", {
    name: "write_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  writeDate: Date;

  @Column("int", { name: "recmd", unsigned: true, default: () => "'0'" })
  recmd: number;

  @Column("mediumtext", { name: "add_info", nullable: true })
  addInfo: string | null;

  @Column("mediumtext", { name: "comment" })
  comment: string;

  @Column("varchar", { name: "attach1", length: 255 })
  attach1: string;

  @Column("varchar", { name: "attach2", length: 255 })
  attach2: string;

  @Column("varchar", { name: "attach3", length: 255 })
  attach3: string;

  @Column("varchar", { name: "attach4", length: 255 })
  attach4: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
