import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_mp_id", ["mpId"], {})
@Index("m_user", ["adminuser", "userId"], {})
@Entity("monami_pet", { schema: "makeshop" })
export class MonamiPet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "mp_id", unsigned: true })
  mpId: number;

  @Column("varchar", { name: "mp_name", length: 30 })
  mpName: string;

  @Column("enum", {
    name: "mp_type",
    nullable: true,
    enum: ["", "DOG", "CAT", "PERSON"],
    default: () => "'DOG'",
  })
  mpType: "" | "DOG" | "CAT" | "PERSON" | null;

  @Column("varchar", { name: "mp_pet_type", length: 50 })
  mpPetType: string;

  @Column("year", { name: "mp_birth", default: () => "'0000'" })
  mpBirth: number;

  @Column("date", {
    name: "mp_birth_day",
    nullable: true,
    default: () => "'0000-00-00'",
  })
  mpBirthDay: string | null;

  @Column("float", {
    name: "mp_weight",
    precision: 3,
    scale: 2,
    default: () => "'1.00'",
  })
  mpWeight: number;

  @Column("smallint", {
    name: "mp_height",
    unsigned: true,
    default: () => "'1'",
  })
  mpHeight: number;

  @Column("enum", {
    name: "mp_sex",
    enum: ["", "F", "M", "NONE"],
    default: () => "'F'",
  })
  mpSex: "" | "F" | "M" | "NONE";

  @Column("varchar", { name: "mp_image", nullable: true, length: 100 })
  mpImage: string | null;

  @Column("varchar", { name: "mp_symptom", nullable: true, length: 255 })
  mpSymptom: string | null;

  @Column("varchar", { name: "mp_brand", nullable: true, length: 255 })
  mpBrand: string | null;

  @Column("datetime", {
    name: "mp_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  mpRegdate: Date;

  @Column("datetime", {
    name: "mp_moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  mpModdate: Date;

  @Column("enum", {
    name: "mp_delegate",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mpDelegate: "" | "Y" | "N";

  @Column("enum", {
    name: "mp_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mpDisplay: "" | "Y" | "N";
}
