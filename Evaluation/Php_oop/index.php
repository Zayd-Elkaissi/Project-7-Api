<?php

// parent
abstract class Personne {
    public $First_name;
    public $Last_name;
    public function Presentation(){
        return 'is person ';
     }
}

// Department
class Department extends Personne{
    public function Presentation(){
        return 'is Department';
      }
    
}
class Employee extends Personne{
    public function Presentation(){
        return 'is employee';
      }
      
}  


interface PersonMethod   {
    
    public function Add($data);
    public function Remove($data);
}
class GestionEmployee implements PersonMethod  {
     static public $count=0;
      
        public function Add($data){
            self::$count++;
            // $this->count++;
        }
  
        public function Remove($data){
            self::$count--;
            // $this->count--;
        }
}

// programme 
$department = new Department('Anas','Sbaey');
$employee = new Employee('Kamal','Abit');
// $employee->First_name= 'Anas';
// $employee->Last_name= 'Sbaey';

 $manage = new GestionEmployee;
 $manage->Add($department);
 $manage->Add($employee);
 $manage->Add($employee);
// echo  $manage->count ."<br>"; //output : 3
echo GestionEmployee::$count ."<br>"; //output : 3

 $manage2 = new GestionEmployee;
 $manage2->Add($department);
 $manage2->Add($employee);

// echo  $manage2->count."<br>"; //output : 2
echo GestionEmployee::$count ."<br>"; //output : 5
echo $department->Presentation() ."<br>" ;// is Department
echo $employee->Presentation();// is employee
?>