import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("g_img_box", { schema: "makeshop" })
export class GImgBox {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "g_title", nullable: true, length: 20 })
  gTitle: string | null;

  @Column("varchar", { name: "g_path", nullable: true, length: 50 })
  gPath: string | null;

  @Column("int", { name: "rec_num", nullable: true })
  recNum: number | null;

  @Column("varchar", { name: "to_time", nullable: true, length: 20 })
  toTime: string | null;
}
