import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("poewr_review_tmp_reserve", { schema: "makeshop" })
export class PoewrReviewTmpReserve {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "id", length: 50 })
  id: string;

  @Column("varchar", { name: "date", length: 20 })
  date: string;

  @Column("int", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("varchar", { name: "product", length: 200 })
  product: string;
}
