import { Column, Entity } from "typeorm";

@Entity("delivery_special_post", { schema: "makeshop" })
export class DeliverySpecialPost {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 10 })
  type: string;

  @Column("varchar", { primary: true, name: "post", length: 6 })
  post: string;
}
