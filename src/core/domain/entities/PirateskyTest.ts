import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("piratesky_test", { schema: "makeshop" })
export class PirateskyTest {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", {
    name: "crated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  cratedAt: Date;
}
