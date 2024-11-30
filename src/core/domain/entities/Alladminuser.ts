import { Column, Entity, Index } from "typeorm";

@Index("reseller", ["resellerId"], {})
@Entity("alladminuser", { schema: "makeshop" })
export class Alladminuser {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "shopname", nullable: true, length: 50 })
  shopname: string | null;

  @Column("varchar", { name: "shoptitle", nullable: true, length: 100 })
  shoptitle: string | null;

  @Column("varchar", { name: "shopurl", nullable: true, length: 50 })
  shopurl: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 100 })
  tel: string | null;

  @Column("varchar", { name: "applicant", nullable: true, length: 12 })
  applicant: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("varchar", { name: "reseller_id", nullable: true, length: 20 })
  resellerId: string | null;
}
