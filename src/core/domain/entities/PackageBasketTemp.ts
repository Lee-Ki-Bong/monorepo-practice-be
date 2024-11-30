import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ordernum", ["adminuser", "tempid"], {})
@Entity("package_basket_temp", { schema: "makeshop" })
export class PackageBasketTemp {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("int", { name: "pack_uid", unsigned: true, default: () => "'0'" })
  packUid: number;

  @Column("int", { name: "pack_amount", unsigned: true, default: () => "'0'" })
  packAmount: number;

  @Column("varchar", { name: "basket_uid", length: 255 })
  basketUid: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
