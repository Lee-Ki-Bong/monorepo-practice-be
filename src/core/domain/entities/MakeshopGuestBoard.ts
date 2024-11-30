import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("subject", ["mgType", "mgSubject", "mgWrtDate"], {})
@Index("uid", ["mgType", "mgUid"], {})
@Index("wrt_name", ["mgType", "mgWrtName", "mgWrtDate"], {})
@Entity("makeshop_guest_board", { schema: "makeshop" })
export class MakeshopGuestBoard {
  @PrimaryGeneratedColumn({ type: "int", name: "mg_uid", unsigned: true })
  mgUid: number;

  @Column("varchar", { primary: true, name: "mg_type", length: 20 })
  mgType: string;

  @Column("varchar", { name: "mg_subject", length: 200 })
  mgSubject: string;

  @Column("mediumtext", { name: "mg_content" })
  mgContent: string;

  @Column("varchar", { name: "mg_wrt_name", length: 30 })
  mgWrtName: string;

  @Column("varchar", { name: "mg_tel", length: 20 })
  mgTel: string;

  @Column("varchar", { name: "mg_file", length: 100 })
  mgFile: string;

  @Column("varchar", { name: "mg_file_real_text", length: 100 })
  mgFileRealText: string;

  @Column("varchar", { name: "mg_state", length: 30 })
  mgState: string;

  @Column("datetime", {
    name: "mg_wrt_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mgWrtDate: Date;

  @Column("varchar", { name: "mg_email", nullable: true, length: 30 })
  mgEmail: string | null;

  @Column("varchar", { name: "mg_shopurl", nullable: true, length: 200 })
  mgShopurl: string | null;

  @Column("varchar", { name: "mg_process_state", nullable: true, length: 30 })
  mgProcessState: string | null;

  @Column("varchar", { name: "mg_manager", nullable: true, length: 30 })
  mgManager: string | null;

  @Column("varchar", { name: "mg_apply_type", nullable: true, length: 30 })
  mgApplyType: string | null;

  @Column("enum", {
    name: "mg_inquiry_build",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mgInquiryBuild: "" | "Y" | "N";

  @Column("enum", {
    name: "mg_inquiry_design",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mgInquiryDesign: "" | "Y" | "N";

  @Column("enum", {
    name: "mg_inquiry_external",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mgInquiryExternal: "" | "Y" | "N";

  @Column("enum", {
    name: "mg_inquiry_custom",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mgInquiryCustom: "" | "Y" | "N";

  @Column("enum", {
    name: "mg_inquiry_trans",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mgInquiryTrans: "" | "Y" | "N";

  @Column("enum", {
    name: "mg_inquiry_etc",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mgInquiryEtc: "" | "Y" | "N";
}
