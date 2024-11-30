import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reple_box", { schema: "makeshop" })
export class RepleBox {
  @PrimaryGeneratedColumn({ type: "int", name: "sid" })
  sid: number;

  @Column("varchar", { name: "rp_txt", nullable: true, length: 200 })
  rpTxt: string | null;

  @Column("varchar", { primary: true, name: "mid", length: 30 })
  mid: string;

  @Column("varchar", { name: "time_sp", nullable: true, length: 20 })
  timeSp: string | null;
}
