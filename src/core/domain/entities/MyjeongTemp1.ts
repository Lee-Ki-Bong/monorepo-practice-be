import { Column, Entity } from "typeorm";

@Entity("myjeong_temp1", { schema: "makeshop" })
export class MyjeongTemp1 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 128 })
  password: string | null;
}
