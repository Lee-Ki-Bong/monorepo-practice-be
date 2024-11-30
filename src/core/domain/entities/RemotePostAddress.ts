import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_address", ["address"], {})
@Index("idx_zip_code", ["zipCode"], {})
@Entity("remote_post_address", { schema: "makeshop" })
export class RemotePostAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "address", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar", { name: "zip_code", length: 6 })
  zipCode: string;

  @Column("char", {
    name: "remote_code",
    nullable: true,
    length: 1,
    default: () => "'2'",
  })
  remoteCode: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
