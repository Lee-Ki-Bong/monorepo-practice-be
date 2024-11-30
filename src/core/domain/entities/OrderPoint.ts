import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pt_uid", ["ptUid"], {})
@Index("ordernum", ["adminuser", "ordernum", "service"], { unique: true })
@Index("user_id", ["adminuser", "userId"], {})
@Entity("order_point", { schema: "makeshop" })
export class OrderPoint {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pt_uid", unsigned: true })
  ptUid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "service", length: 10 })
  service: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "pt_in_price", default: () => "'0'" })
  ptInPrice: number;

  @Column("datetime", { name: "pt_in_date", nullable: true })
  ptInDate: Date | null;

  @Column("int", { name: "pt_out_price", default: () => "'0'" })
  ptOutPrice: number;

  @Column("datetime", { name: "pt_out_date", nullable: true })
  ptOutDate: Date | null;

  @Column("int", { name: "pt_sum_price", default: () => "'0'" })
  ptSumPrice: number;

  @Column("enum", {
    name: "pt_state",
    enum: ["", "CANCEL", "PART", "USE"],
    default: () => "'USE'",
  })
  ptState: "" | "CANCEL" | "PART" | "USE";

  @Column("datetime", { name: "pt_date_insert", nullable: true })
  ptDateInsert: Date | null;
}
