import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_acp", ["adminuser", "acpStart", "acpEnd"], {})
@Index("idx_auto_ev_uid", ["evUid"], {})
@Index("idx_ev_status", ["adminuser", "evStatus"], {})
@Index("idx_ex_status", ["adminuser", "exStatus"], {})
@Index("idx_title", ["adminuser", "evTitle"], {})
@Index("uidx_ordinal_name", ["adminuser", "ordinalName"], { unique: true })
@Entity("evaluation", { schema: "makeshop" })
export class Evaluation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_code",
    length: 20,
    default: () => "'BASIC'",
  })
  evCode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ev_uid", unsigned: true })
  evUid: number;

  @Column("varchar", { name: "ordinal_name", length: 255 })
  ordinalName: string;

  @Column("varchar", { name: "ev_title", length: 255 })
  evTitle: string;

  @Column("datetime", {
    name: "app_start",
    default: () => "'0000-00-00 00:00:00'",
  })
  appStart: Date;

  @Column("datetime", {
    name: "app_end",
    default: () => "'0000-00-00 00:00:00'",
  })
  appEnd: Date;

  @Column("datetime", {
    name: "acp_start",
    default: () => "'0000-00-00 00:00:00'",
  })
  acpStart: Date;

  @Column("datetime", {
    name: "acp_end",
    default: () => "'0000-00-00 00:00:00'",
  })
  acpEnd: Date;

  @Column("char", { name: "release_type", length: 1, default: () => "'D'" })
  releaseType: string;

  @Column("datetime", {
    name: "release_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  releaseDate: Date;

  @Column("date", { name: "class_date", default: () => "'0000-00-00'" })
  classDate: string;

  @Column("varchar", { name: "class_time_start", length: 8 })
  classTimeStart: string;

  @Column("varchar", { name: "class_time_end", length: 8 })
  classTimeEnd: string;

  @Column("varchar", { name: "release_text", length: 255 })
  releaseText: string;

  @Column("char", { name: "use_recruitment", length: 1, default: () => "'Y'" })
  useRecruitment: string;

  @Column("mediumint", {
    name: "recruitment",
    unsigned: true,
    default: () => "'0'",
  })
  recruitment: number;

  @Column("mediumint", {
    name: "part_count",
    unsigned: true,
    default: () => "'0'",
  })
  partCount: number;

  @Column("enum", {
    name: "use_cancel",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useCancel: "" | "Y" | "N";

  @Column("char", { name: "ev_status", length: 1, default: () => "'S'" })
  evStatus: string;

  @Column("varchar", { name: "pc_notice_link", length: 255 })
  pcNoticeLink: string;

  @Column("varchar", { name: "mobile_notice_link", length: 255 })
  mobileNoticeLink: string;

  @Column("char", { name: "ex_status", length: 1, default: () => "'N'" })
  exStatus: string;

  @Column("varchar", { name: "selection_criteria", length: 255 })
  selectionCriteria: string;

  @Column("int", {
    name: "product_uid_delegate",
    unsigned: true,
    default: () => "'0'",
  })
  productUidDelegate: number;

  @Column("varchar", { name: "brandnames", length: 255 })
  brandnames: string;

  @Column("varchar", { name: "pc_list_image", length: 255 })
  pcListImage: string;

  @Column("varchar", { name: "mobile_list_image", length: 255 })
  mobileListImage: string;

  @Column("varchar", { name: "pc_content_image1", length: 255 })
  pcContentImage1: string;

  @Column("varchar", { name: "mobile_content_image1", length: 255 })
  mobileContentImage1: string;

  @Column("varchar", { name: "pc_content_image2", length: 255 })
  pcContentImage2: string;

  @Column("varchar", { name: "mobile_content_image2", length: 255 })
  mobileContentImage2: string;

  @Column("varchar", { name: "pc_content_image3", length: 255 })
  pcContentImage3: string;

  @Column("varchar", { name: "mobile_content_image3", length: 255 })
  mobileContentImage3: string;

  @Column("mediumtext", { name: "contents" })
  contents: string;

  @Column("mediumtext", { name: "release_contents", nullable: true })
  releaseContents: string | null;

  @Column("mediumtext", { name: "mobile_release_contents", nullable: true })
  mobileReleaseContents: string | null;

  @Column("char", { name: "use_enter_form", length: 1, default: () => "'Y'" })
  useEnterForm: string;

  @Column("mediumtext", { name: "enter_form" })
  enterForm: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", {
    name: "ev_sort_num",
    length: 14,
    default: () => "'00000000000000'",
  })
  evSortNum: string;

  @Column("set", {
    name: "display_device",
    nullable: true,
    enum: ["PC", "MOBILE"],
    default: () => ["PC", "MOBILE"],
  })
  displayDevice: ("PC" | "MOBILE")[] | null;
}
