import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("compnay_reg_date", ["adminuser", "regDate", "companyUid"], {})
@Entity("open_api_count", { schema: "makeshop" })
export class OpenApiCount {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "company_uid", unsigned: true, default: () => "'0'" })
  companyUid: number;

  @Column("varchar", { name: "api_type", length: 20, default: () => "'inq'" })
  apiType: string;

  @Column("varchar", {
    name: "return_code",
    length: 4,
    default: () => "'0000'",
  })
  returnCode: string;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("mediumtext", { name: "params", nullable: true })
  params: string | null;
}
