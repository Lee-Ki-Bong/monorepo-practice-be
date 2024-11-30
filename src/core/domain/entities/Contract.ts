import { Column, Entity } from "typeorm";

@Entity("contract", { schema: "makeshop" })
export class Contract {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "third_party",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  thirdParty: "" | "Y" | "N";

  @Column("enum", { name: "trust", enum: ["", "Y", "N"], default: () => "'N'" })
  trust: "" | "Y" | "N";

  @Column("char", {
    name: "form_mail_agree",
    length: 3,
    default: () => "'NNN'",
  })
  formMailAgree: string;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("longtext", { name: "content_eng", nullable: true })
  contentEng: string | null;

  @Column("longtext", { name: "privercy", nullable: true })
  privercy: string | null;

  @Column("longtext", { name: "privercy_eng", nullable: true })
  privercyEng: string | null;

  @Column("longtext", { name: "privercy2", nullable: true })
  privercy2: string | null;

  @Column("longtext", { name: "privercy2_eng", nullable: true })
  privercy2Eng: string | null;

  @Column("longtext", { name: "new_privercy" })
  newPrivercy: string;

  @Column("longtext", { name: "new_privercy_third" })
  newPrivercyThird: string;

  @Column("longtext", { name: "new_privercy1" })
  newPrivercy1: string;

  @Column("longtext", { name: "new_privercy1_eng", nullable: true })
  newPrivercy1Eng: string | null;

  @Column("longtext", { name: "new_privercy2" })
  newPrivercy2: string;

  @Column("longtext", { name: "new_privercy2_eng", nullable: true })
  newPrivercy2Eng: string | null;

  @Column("longtext", { name: "new_privercy3" })
  newPrivercy3: string;

  @Column("longtext", { name: "new_privercy3_eng", nullable: true })
  newPrivercy3Eng: string | null;

  @Column("longtext", { name: "new_privercy4" })
  newPrivercy4: string;

  @Column("longtext", { name: "new_privercy4_eng", nullable: true })
  newPrivercy4Eng: string | null;

  @Column("longtext", { name: "new_privercy5" })
  newPrivercy5: string;

  @Column("longtext", { name: "new_privercy5_eng", nullable: true })
  newPrivercy5Eng: string | null;

  @Column("mediumtext", { name: "useinfo", nullable: true })
  useinfo: string | null;

  @Column("enum", {
    name: "bizinfolink",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bizinfolink: "" | "Y" | "N" | null;

  @Column("char", {
    name: "recallcheck",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  recallcheck: string | null;

  @Column("longtext", { name: "recall", nullable: true })
  recall: string | null;

  @Column("longtext", { name: "pvd_use", nullable: true })
  pvdUse: string | null;

  @Column("enum", {
    name: "pvd_new_contract",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  pvdNewContract: "" | "Y" | "N";

  @Column("enum", {
    name: "pvd_use_privacy",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  pvdUsePrivacy: "" | "Y" | "N";

  @Column("enum", {
    name: "pvd_join_top",
    nullable: true,
    enum: ["", "none", "gif", "jpg"],
    default: () => "'none'",
  })
  pvdJoinTop: "" | "none" | "gif" | "jpg" | null;

  @Column("longtext", { name: "pvd_personal_info", nullable: true })
  pvdPersonalInfo: string | null;

  @Column("longtext", { name: "pvd_new_privercy" })
  pvdNewPrivercy: string;

  @Column("longtext", { name: "pvd_new_privercy1" })
  pvdNewPrivercy1: string;

  @Column("longtext", { name: "pvd_new_privercy2" })
  pvdNewPrivercy2: string;

  @Column("longtext", { name: "pvd_new_privercy3" })
  pvdNewPrivercy3: string;

  @Column("varchar", { name: "pvd_documents", nullable: true, length: 100 })
  pvdDocuments: string | null;

  @Column("varchar", { name: "pvd_sendplace", nullable: true, length: 150 })
  pvdSendplace: string | null;
}
