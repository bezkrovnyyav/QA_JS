/*
Task_2
���� 3 �������� �������������: �� ����������� � �� ������ ������ ����,
���� ����������� - �� �� ������ ������ ���� (��� id=7),
��� ��������� �������������� ������������ ����� ����.
����� �������� JS ������, ������� ����� ���������� False,
���� ������������ �� �����������, False ���� ������������ � id=7,
True ��� ��������� �������������� �������������

- p.currentUser.isGuest() - ��� ���������� ���, ���� ������������ �� �����������
- p.currentUser.getValue('id') - ��� ���������� �������� �������� ��������������� ������������

*/
let isGuest = function(){
	return true
}

isGuest = p.currentUser.isGuest()
getValue = p.currentUser.getValue('id')

test =( isGuest === true || getValue === 7) ? false : true;
console.log(test)

