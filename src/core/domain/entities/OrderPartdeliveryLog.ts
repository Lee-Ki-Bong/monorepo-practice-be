import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_partdelivery_log", { schema: "makeshop" })
export class OrderPartdeliveryLog {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("char", { name: "status", nullable: true, length: 3 })
  status: string | null;

  @Column("mediumtext", { name: "ordernums", nullable: true })
  ordernums: string | null;
}
