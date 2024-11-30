import { Column, Entity } from "typeorm";

@Entity("power_review_adddata", { schema: "makeshop" })
export class PowerReviewAdddata {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 25 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 20 })
  num1: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "pra_data1", length: 255 })
  praData1: string;

  @Column("varchar", { name: "pra_data2", length: 255 })
  praData2: string;

  @Column("varchar", { name: "pra_data3", length: 255 })
  praData3: string;

  @Column("varchar", { name: "pra_data4", length: 255 })
  praData4: string;

  @Column("varchar", { name: "pra_data5", length: 255 })
  praData5: string;

  @Column("varchar", { name: "pra_data6", length: 255 })
  praData6: string;

  @Column("varchar", { name: "pra_data7", length: 255 })
  praData7: string;

  @Column("varchar", { name: "pra_data8", length: 255 })
  praData8: string;

  @Column("varchar", { name: "pra_data9", length: 255 })
  praData9: string;

  @Column("varchar", { name: "pra_data10", length: 255 })
  praData10: string;
}
