import { Column, Entity } from "typeorm";

@Entity("selecsmall_employee", { schema: "makeshop" })
export class SelecsmallEmployee {
  @Column("varchar", { name: "emp_id", length: 50 })
  empId: string;

  @Column("varchar", { name: "mobile_no", length: 50 })
  mobileNo: string;

  @Column("char", { name: "check_type", length: 1, default: () => "'C'" })
  checkType: string;
}
