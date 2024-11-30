import { Column, Entity, Index } from "typeorm";

@Index("agree_email", ["miAgreeEmail"], {})
@Index("agree_tel", ["miAgreeTel"], {})
@Index("ci", ["miCi"], {})
@Entity("member_info", { schema: "makeshop" })
export class MemberInfo {
  @Column("int", { primary: true, name: "mc_key", default: () => "'0'" })
  mcKey: number;

  @Column("varchar", { name: "mi_tel", length: 20 })
  miTel: string;

  @Column("varchar", { name: "mi_email", length: 50 })
  miEmail: string;

  @Column("enum", {
    name: "mi_agree_tel",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  miAgreeTel: "" | "Y" | "N";

  @Column("enum", {
    name: "mi_agree_email",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  miAgreeEmail: "" | "Y" | "N";

  @Column("varchar", { name: "mi_auth_type", length: 10 })
  miAuthType: string;

  @Column("varchar", { name: "mi_ci", length: 88 })
  miCi: string;

  @Column("varchar", { name: "mi_di", length: 64 })
  miDi: string;
}
