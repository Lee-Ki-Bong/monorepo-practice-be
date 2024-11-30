import { Column, Entity } from "typeorm";

@Entity("userinfo_control", { schema: "makeshop" })
export class UserinfoControl {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "mem_type",
    enum: ["", "PERSON", "COMPANY", "SIMPLE", "SNS"],
    default: () => "'PERSON'",
  })
  memType: "" | "PERSON" | "COMPANY" | "SIMPLE" | "SNS";

  @Column("varchar", { primary: true, name: "uc_name", length: 20 })
  ucName: string;

  @Column("enum", {
    name: "uc_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  ucUse: "" | "Y" | "N";

  @Column("enum", {
    name: "uc_required",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ucRequired: "" | "Y" | "N";

  @Column("enum", {
    name: "uc_update",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  ucUpdate: "" | "Y" | "N";
}
