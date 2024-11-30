import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_uid", ["adminuser", "uid"], {})
@Index("date_regist", ["adminuser", "dateRegist"], {})
@Index("idx_auto_wish_id", ["wishId"], {})
@Entity("wish", { schema: "makeshop" })
export class Wish {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "wish_id", unsigned: true })
  wishId: number;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
