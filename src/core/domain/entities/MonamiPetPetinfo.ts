import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pet_name", ["petName"], { unique: true })
@Entity("monami_pet_petinfo", { schema: "makeshop" })
export class MonamiPetPetinfo {
  @PrimaryGeneratedColumn({ type: "int", name: "mpp_id", unsigned: true })
  mppId: number;

  @Column("varchar", { name: "pet_name", unique: true, length: 50 })
  petName: string;

  @Column("mediumtext", { name: "pet_info" })
  petInfo: string;

  @Column("varchar", { name: "pet_symptom", nullable: true, length: 255 })
  petSymptom: string | null;

  @Column("datetime", {
    name: "pet_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  petRegdate: Date;

  @Column("datetime", {
    name: "pet_moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  petModdate: Date;
}
