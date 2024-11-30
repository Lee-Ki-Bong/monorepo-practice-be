import { Column, Entity } from "typeorm";

@Entity("ars_reject_info", { schema: "makeshop" })
export class ArsRejectInfo {
  @Column("varchar", { primary: true, name: "rjt_adminuser", length: 12 })
  rjtAdminuser: string;

  @Column("varchar", { name: "rjt_phone", length: 20 })
  rjtPhone: string;

  @Column("enum", {
    name: "rjt_status",
    enum: ["", "NO", "YES", "WAIT"],
    default: () => "'NO'",
  })
  rjtStatus: "" | "NO" | "YES" | "WAIT";

  @Column("enum", {
    name: "rjt_ment",
    enum: ["", "NO", "YES", "WAIT"],
    default: () => "'NO'",
  })
  rjtMent: "" | "NO" | "YES" | "WAIT";

  @Column("varchar", { name: "rjt_applicant", length: 30 })
  rjtApplicant: string;

  @Column("varchar", { name: "rjt_app_tel", length: 20 })
  rjtAppTel: string;

  @Column("date", { name: "rjt_regdate", default: () => "'0000-00-00'" })
  rjtRegdate: string;

  @Column("date", { name: "rjt_startdate", default: () => "'0000-00-00'" })
  rjtStartdate: string;

  @Column("date", { name: "rjt_lastdate", default: () => "'0000-00-00'" })
  rjtLastdate: string;
}
