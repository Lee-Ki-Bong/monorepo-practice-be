import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_address", ["address"], {})
@Index("idx_building", ["building"], {})
@Index("idx_road", ["road"], {})
@Index("idx_zip_code", ["zipCode"], {})
@Entity("remote_post_address_test", { schema: "makeshop" })
export class RemotePostAddressTest {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "address", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar", { name: "road", nullable: true, length: 50 })
  road: string | null;

  @Column("varchar", { name: "building", nullable: true, length: 50 })
  building: string | null;

  @Column("varchar", { name: "zip_code", length: 6 })
  zipCode: string;

  @Column("char", {
    name: "remote_code",
    nullable: true,
    length: 1,
    default: () => "'2'",
  })
  remoteCode: string | null;

  @Column("datetime", {
    name: "reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date | null;
}
