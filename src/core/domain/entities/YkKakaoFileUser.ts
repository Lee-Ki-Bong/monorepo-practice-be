import { Column, Entity } from "typeorm";

@Entity("yk_kakao_file_user", { schema: "makeshop" })
export class YkKakaoFileUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "phone", length: 20 })
  phone: string;

  @Column("varchar", { name: "gender", nullable: true, length: 8 })
  gender: string | null;

  @Column("smallint", { name: "age", nullable: true, unsigned: true })
  age: number | null;

  @Column("int", { name: "order_price", nullable: true })
  orderPrice: number | null;

  @Column("smallint", { name: "group_id", nullable: true, unsigned: true })
  groupId: number | null;

  @Column("date", { name: "join_date", nullable: true })
  joinDate: string | null;

  @Column("date", { name: "last_order", nullable: true })
  lastOrder: string | null;

  @Column("mediumint", { name: "last_login", nullable: true, unsigned: true })
  lastLogin: number | null;

  @Column("smallint", { name: "child", nullable: true, unsigned: true })
  child: number | null;

  @Column("smallint", { name: "cate1", nullable: true, unsigned: true })
  cate1: number | null;

  @Column("int", { name: "cate1_price", nullable: true })
  cate1Price: number | null;

  @Column("smallint", { name: "cate2", nullable: true, unsigned: true })
  cate2: number | null;

  @Column("int", { name: "cate2_price", nullable: true })
  cate2Price: number | null;

  @Column("smallint", { name: "cate3", nullable: true, unsigned: true })
  cate3: number | null;

  @Column("int", { name: "cate3_price", nullable: true })
  cate3Price: number | null;
}
