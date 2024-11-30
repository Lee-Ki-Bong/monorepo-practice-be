import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("br_zip_code", ["brZipCode"], {})
@Entity("br_region_code", { schema: "makeshop" })
export class BrRegionCode {
  @PrimaryGeneratedColumn({ type: "int", name: "br_uid", unsigned: true })
  brUid: number;

  @Column("varchar", { name: "br_zip_code", length: 6 })
  brZipCode: string;

  @Column("varchar", { name: "br_area", length: 20 })
  brArea: string;

  @Column("varchar", { name: "br_transport", length: 10 })
  brTransport: string;
}
