import { Column, Entity, Index } from "typeorm";

@Index("ordpfact", ["adminuser", "ordPfact"], {})
@Entity("oo_temp_basket_seil", { schema: "makeshop" })
export class OoTempBasketSeil {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "num", default: () => "'1'" })
  num: number;

  @Column("varchar", { name: "ord_num", length: 70 })
  ordNum: string;

  @Column("varchar", { name: "ord_insurnum", length: 70 })
  ordInsurnum: string;

  @Column("varchar", { name: "ord_standnum", length: 70 })
  ordStandnum: string;

  @Column("varchar", { name: "ord_pfact", nullable: true, length: 100 })
  ordPfact: string | null;

  @Column("varchar", { name: "ord_option_code", length: 50 })
  ordOptionCode: string;

  @Column("varchar", { name: "ord_rack_code", length: 50 })
  ordRackCode: string;

  @Column("varchar", { name: "ord_permission_num", length: 50 })
  ordPermissionNum: string;
}
